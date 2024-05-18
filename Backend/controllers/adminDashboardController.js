import appointment from "../models/appointment.js";
import promotion from "../models/promotionModel.js";
import user from "../models/userModel.js";
const dashboard = async ({ req, res }) => {
    try {
        const today = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        const todayDate = new Date(today.toISOString().split('T')[0]);
        const dailyPatientAvg = await appointment.aggregate([ // Use 'appointment' directly
            {
                $match: {
                    appointmentdate: {
                        $gte: oneMonthAgo,
                        $lte: today
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalAppointments: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    monthlyAverage: { $divide: ["$totalAppointments", 30] }
                }
            }
        ]);
        const dailyincome = await appointment.aggregate([
            {
                $match: {
                    appointmentdate: {
                        $eq: todayDate
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalIncome: { $sum: "$promotionIncome" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalIncome: "$totalIncome"
                }
            }
        ]);
        const monthlyIncome = await appointment.aggregate([
            {
                $match: {
                    appointmentdate: {
                        $gte: oneMonthAgo,
                        $lte: today
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalmonthlyincome: { $sum: "$promotionIncome" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalmonthlyincome: "$totalmonthlyincome"
                }
            }
        ]);
        const overallIncome = await appointment.aggregate([
            {
                $match: {
                }
            },
            {
                $group: {
                    _id: null,
                    totalincome: { $sum: "$promotionIncome" }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalincome: "$totalincome"
                }
            }
        ]);
        const findIncomeByMonth = async () => {
            try {
                const currentDay = new Date();
                let currentMonth = currentDay.getMonth();
                const currentYear = currentDay.getFullYear();
                const lastYear = currentYear - 1
                const months = []; // Array to store results for each month
                let yearchange = false;
                const monthNames = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                let startDate;
                let endDate;
                for (let count = 0; count <= 12; count++) {
                    if (!yearchange) {
                        startDate = new Date(lastYear, currentMonth, 1);
                        endDate = new Date(lastYear, currentMonth + 1, 0); // Last day of the month
                    }
                    else {
                        startDate = new Date(currentYear, currentMonth, 1);
                        endDate = new Date(currentYear, currentMonth + 1, 0); // Last day of the month
                    }
                    const monthlyIncome = await appointment.aggregate([
                        {
                            $match: {
                                appointmentdate:
                                    { $gte: startDate, $lte: endDate },
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                totalIncome: { $sum: "$promotionIncome" }
                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                month: { $month: "$appointmentdate" },
                                year: { $year: "$appointmentdate" },
                                totalIncome: "$totalIncome"
                            }
                        }
                    ]);

                    const monthName = monthNames[currentMonth]; // Get month name from array
                    if (!yearchange) {
                        months.push({ month: monthName, year: currentYear - 1, totalIncome: monthlyIncome.length > 0 ? monthlyIncome[0].totalIncome : 0 });
                    }
                    else {
                        months.push({ month: monthName, year: currentYear, totalIncome: monthlyIncome.length > 0 ? monthlyIncome[0].totalIncome : 0 });
                    }
                    if (currentMonth === 11) {
                        currentMonth = 0;
                        yearchange = true;
                        continue;
                    }
                    currentMonth++;
                }

                return months;
            } catch (error) {
                console.error("Error finding income by month:", error);
                return [];
            }
        };


        const monthlyAverage = dailyPatientAvg.length > 0 ? dailyPatientAvg[0].monthlyAverage : 0;
        const dailyIncome = dailyincome.length > 0 ? dailyincome[0].totalIncome : 0;
        const monthlyIncomeValue = monthlyIncome.length > 0 ? monthlyIncome[0].totalmonthlyincome : 0;
        const totalIncomeValue = overallIncome.length > 0 ? overallIncome[0].totalincome : 0;
        res.json({ monthlyAverage, dailyIncome, monthlyIncomeValue, totalIncomeValue, incomeByMonth: await findIncomeByMonth() });
    } catch (error) {
        console.error("Error calculating monthly patient average:", error);
        res.status(500).json({ error: "Server error" }, { success: false });
    }
};






const patientPage = async({req,res}) => {
    try {
        const currentDayEnd = new Date().setHours(23, 59, 59, 999);
        const currentDayStart = new Date().setHours(0, 0, 0, 0);
        const patientsByLocallocation = await user.aggregate([
            {
                $match: {
                    location: 'Local',
                    role: 'Patient',
                    appointmentCounter: { $gt: 0 },
                },
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                }
            },
        ]);
        const patientsByForeignlocation = await user.aggregate([
            {
                $match: {
                    location: 'Foreign',
                    role: 'Patient',
                    appointmentCounter: { $gt: 0 },
                },
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                }
            },
        ]);
        const malepatients = await appointment.aggregate([
            {
                $match:{
                    patientGender:"Male",
                },

            },
            {
                $group:{
                    _id:null,
                    count:{$sum:1}
                }
            }
        ]);
        const femalepatients = await user.aggregate([
            {
                $match:{
                    patientGender:"Female",
                },

            },
            {
                $group:{
                    _id:null,
                    count:{$sum:1}
                }
            }
        ]);
        const patientsgt20 = await appointment.aggregate([
            {
                $match: {
                    patientAge: 
                    { 
                        $gt: 20 ,
                        $lte:40
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                }
            }
        ])
        const patientslt20 = await appointment.aggregate([
            {
                $match: {
                    patientAge: { $lt: 20 },
                },
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                }
            }

        ])
        const patientsgt40 = await appointment.aggregate([
            {
                $match: {
                    patientAge: 
                    { 
                        $gt: 40 ,
                    },
                },
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                }
            }
        ])
        const femalePatientsToday = await appointment.aggregate([
            {
                $match:{
                    patientGender:"Female",
                    appointemntdate:{$gte:currentDayStart,$lt:currentDayEnd}
                },

            },
            {
                $group:{
                    _id:null,
                    count:{$sum:1}
                }
            }
        ])
        const malePatientsToday = await appointment.aggregate([
            {
                $match:{
                    patientGender:"Male",
                    appointemntdate:{$gte:currentDayStart,$lt:currentDayEnd}
                },

            },
            {
                $group:{
                    _id:null,
                    count:{$sum:1}
                }
            }
        ])
        const patientsToday = await appointment.aggregate([
            {
                $match:{
                    appointemntdate:{$gte:currentDayStart,$lt:currentDayEnd}
                },

            },
            {
                $group:{
                    _id:null,
                    count:{$sum:1}
                }
            }
        ])
        const today = new Date().toISOString().slice(0, 10);
        const appointmentsCount = await appointment.aggregate([
            {
              $match: {
                appointmentdate: { $eq: today },
                appointmentStatus: "Approved",
              },
            },
            {
              $lookup: {
                from: "user",
                localField: "patientCNIC",
                foreignField: "cnic",
                as: "user",
              },
            },
            {
              $unwind: "$user",
            },
            {
              $match: {
                "user.appointmentCounter": 1,
              },
            },
            {
              $count: "totalAppointments", // Project the count with an alias "totalAppointments"
            },
          ])
          .catch(error => {
            console.error("Error getting new patient appointment count:", error);
            return 0; // Or return a more appropriate value in case of error
          });
          



        const newPatientsToday = appointmentsCount.length > 0 ? appointmentsCount[0].totalAppointments : 0;
        const patientsTodayCount = patientsToday.length > 0 ? patientsToday[0].count : 0;
        const femalePatientTodayCount = femalePatientsToday.length> 0 ? femalePatientsToday[0].count : 0;
        const malePatientTodayCount = malePatientsToday.length> 0 ? malePatientsToday[0].count : 0;
        const patientsAgegt20 = patientsgt20.length > 0 ? patientsgt20[0].count : 0;
        const patientsAgegt40 = patientsgt40.length > 0 ? patientsgt40[0].count : 0;
        const patientsAgelt20 = patientslt20.length > 0 ? patientslt20[0].count : 0;
        const malePatients = malepatients.length > 0 ? malepatients[0].count : 0;
        const femalePatients = femalepatients.length > 0 ? femalepatients[0].count : 0;
        const foreignPatients = patientsByForeignlocation.length > 0 ? patientsByForeignlocation[0].count : 0;
        const localPatients = patientsByLocallocation.length > 0 ? patientsByLocallocation[0].count : 0;
        res.status(200).json({ malePatients, femalePatients, foreignPatients, localPatients, patientsAgelt20, patientsAgegt20,patientsAgegt40,femalePatientTodayCount,malePatientTodayCount,patientsTodayCount,newPatientsToday ,success: true });
    } catch (error) {
        res.status(500).json({ error: "Server error", success: false });
    }
}




const viewappointment = async ({ res }) => {
    try {
        const today = new Date();
        const todayDate = today.toISOString().split('T')[0];
        const allAppointments = await appointment.find({
            appointmentdate: todayDate,
            appointmentStatus: "Pending",
        }).select("id appointmentdate appointmentStatus planChosen month")
        res.status(200).json({ success: true, allAppointments });
    } catch (error) {
        console.error("Error viewing appointments:", error);
        res.status(500).json({ error: "Server error", success: false });
    }
};





const acceptAppointment = async ({ req, res }) => {
    try {
        const today = new Date();
        const todayDate = today.toISOString().split('T')[0];
        const appointments = await appointment.findOne({
            appointmentdate: todayDate,
            appointmentStatus: "Pending",
        }).sort({ appointmentdate: 1 });
        if (appointments) {
            appointments.appointmentStatus = "Approved";
            await appointments.save();
            res.status(200).json({ success: true, message: "Appointment accepted successfully" });
        }
    } catch (error) {
        console.error("Error accepting appointment:", error);
        res.status(500).json({ error: "Server error", success: false });
    }
};





const  packagePage  = async ({ req, res }) => {
    try {
        const findBasicPlanByMonth = async () => {
            try {
              const currentDay = new Date();
              let currentMonth = currentDay.getMonth();
              const currentYear = currentDay.getFullYear();
              const lastYear = currentYear - 1;
              const months = []; // Array to store results for each month
              let yearchange = false;
              const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              let startDate;
              let endDate;
          
              for (let count = 0; count <= 12; count++) {
                if (!yearchange) {
                  startDate = new Date(lastYear, currentMonth, 1);
                  endDate = new Date(lastYear, currentMonth + 1, 0); // Last day of the month
                } else {
                  startDate = new Date(currentYear, currentMonth, 1);
                  endDate = new Date(currentYear, currentMonth + 1, 0); // Last day of the month
                }
          
                const basicPlanAppointments = await appointment.aggregate([
                  {
                    $match: {
                      appointmentdate: { $gte: startDate, $lte: endDate },
                      planChosen: "Basic Plan", // Filter for appointments with "Basic Plan"
                    },
                  },
                  {
                    $group: {
                      _id: null,
                      count: { $sum: 1 }, // Count the number of appointments
                    },
                  },
                  {
                    $project: {
                      _id: 0,
                      month: { $month: "$appointmentdate" },
                      year: { $year: "$appointmentdate" },
                      count: "$count", // Rename "count" to a more descriptive field name (e.g., basicPlanCount)
                    },
                  },
                ]);
          
                const monthName = monthNames[currentMonth]; // Get month name from array
                if (!yearchange) {
                  months.push({
                    month: monthName,
                    year: currentYear - 1,
                    basicPlanCount: basicPlanAppointments.length > 0 ? basicPlanAppointments[0].count : 0,
                  });
                } else {
                  months.push({
                    month: monthName,
                    year: currentYear,
                    basicPlanCount: basicPlanAppointments.length > 0 ? basicPlanAppointments[0].count : 0,
                  });
                }
          
                if (currentMonth === 11) {
                  currentMonth = 0;
                  yearchange = true;
                  continue;
                }
                currentMonth++;
              }
          
              return months;
            } catch (error) {
              console.error("Error finding basic plan appointments by month:", error);
              return [];
            }
          };
          
          const findPremiumPlanByMonth = async () => {
            try {
              const currentDay = new Date();
              let currentMonth = currentDay.getMonth();
              const currentYear = currentDay.getFullYear();
              const lastYear = currentYear - 1;
              const months = []; // Array to store results for each month
              let yearchange = false;
              const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              let startDate;
              let endDate;
          
              for (let count = 0; count <= 12; count++) {
                if (!yearchange) {
                  startDate = new Date(lastYear, currentMonth, 1);
                  endDate = new Date(lastYear, currentMonth + 1, 0); // Last day of the month
                } else {
                  startDate = new Date(currentYear, currentMonth, 1);
                  endDate = new Date(currentYear, currentMonth + 1, 0); // Last day of the month
                }
          
                const premiumPlanAppointments = await appointment.aggregate([
                  {
                    $match: {
                      appointmentdate: { $gte: startDate, $lte: endDate },
                      planChosen: "Premium Plan", // Filter for appointments with "Premium Plan"
                    },
                  },
                  {
                    $group: {
                      _id: null,
                      count: { $sum: 1 }, // Count the number of appointments
                    },
                  },
                  {
                    $project: {
                      _id: 0,
                      month: { $month: "$appointmentdate" },
                      year: { $year: "$appointmentdate" },
                      count: "$count", // Rename "count" to a more descriptive field name (e.g., premiumPlanCount)
                    },
                  },
                ]);
          
                const monthName = monthNames[currentMonth]; // Get month name from array
                if (!yearchange) {
                  months.push({
                    month: monthName,
                    year: currentYear - 1,
                    premiumPlanCount: premiumPlanAppointments.length > 0 ? premiumPlanAppointments[0].count : 0,
                  });
                } else {
                  months.push({
                    month: monthName,
                    year: currentYear,
                    premiumPlanCount: premiumPlanAppointments.length > 0 ? premiumPlanAppointments[0].count : 0,
                  });
                }
          
                if (currentMonth === 11) {
                  currentMonth = 0;
                  yearchange = true;
                  continue;
                }
                currentMonth++;
              }
          
              return months;
            } catch (error) {
              console.error("Error finding premium plan appointments by month:", error);
              return [];
            }   
          };
          const findAllAppointmentsByMonth = async () => {
            try {
              const currentDay = new Date();
              let currentMonth = currentDay.getMonth();
              const currentYear = currentDay.getFullYear();
              const lastYear = currentYear - 1;
              const months = []; // Array to store results for each month
              let yearchange = false;
              const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              let startDate;
              let endDate;
          
              for (let count = 0; count <= 12; count++) {
                if (!yearchange) {
                  startDate = new Date(lastYear, currentMonth, 1);
                  endDate = new Date(lastYear, currentMonth + 1, 0); // Last day of the month
                } else {
                  startDate = new Date(currentYear, currentMonth, 1);
                  endDate = new Date(currentYear, currentMonth + 1, 0); // Last day of the month
                }
          
                const allAppointments = await appointment.aggregate([
                  {
                    $match: {
                      appointmentdate: { $gte: startDate, $lte: endDate },
                    },
                  },
                  {
                    $group: {
                      _id: null,
                      count: { $sum: 1 }, // Count the total number of appointments
                    },
                  },
                  {
                    $project: {
                      _id: 0,
                      month: { $month: "$appointmentdate" },
                      year: { $year: "$appointmentdate" },
                      count: "$count", // Rename "count" to a more descriptive field name (e.g., totalAppointmentCount)
                    },
                  },
                ]);
          
                const monthName = monthNames[currentMonth]; // Get month name from array
                if (!yearchange) {
                  months.push({
                    month: monthName,
                    year: currentYear - 1,
                    totalAppointmentCount: allAppointments.length > 0 ? allAppointments[0].count : 0,
                  });
                } else {
                  months.push({
                    month: monthName,
                    year: currentYear,
                    totalAppointmentCount: allAppointments.length > 0 ? allAppointments[0].count : 0,
                  });
                }
          
                if (currentMonth === 11) {
                  currentMonth = 0;
                  yearchange = true;
                  continue;
                }
                currentMonth++;
              }
          
              return months;
            } catch (error) {
              console.error("Error finding total appointments by month:", error);
              return [];
            }
          };
          const getTotalAppointmentsCount = async () => {
            try {
              const count = await appointment.countDocuments(); // Count all appointments
              return count;
            } catch (error) {
              console.error("Error getting total appointment count:", error);
              return 0;
            }
          };

        
const getMostFrequentPlan = async () => {
    try {
      const result = await appointment.aggregate([
        {
          $group: {
            _id: "$planChosen", // Group by planChosen
            count: { $sum: 1 }, // Count the number of appointments in each group
          },
        },
        {
          $sort: { count: -1 }, // Sort by count in descending order (most frequent first)
        },
        {
          $limit: 1, // Limit to the top 1 document (most frequent plan)
        },
        {
          $project: {
            _id: 0, // Exclude the _id field from the result
            plan: "$_id", // Rename _id to plan for clarity
          },
        },
      ]);
  
      if (result.length > 0) {
        return result[0]; // Return the first document (most frequent plan)
      } else {
        return { plan: "No appointments found", count: 0 }; // Handle no appointments case
      }
    } catch (error) {
      console.error("Error getting most frequent plan:", error);
      return null;
    }
  };
  const getAppointmentsLatestToOldest = async () => {
    try {
      const appointments = await appointment.aggregate([
        {
          $sort: {
            appointmentdate: -1 // Sort by appointment date in descending order
          }
        }
      ]);
      return appointments;
    } catch (error) {
      console.error('Error retrieving appointments:', error);
      throw error;
    }
  };

        const mostFrequentPlan = await getMostFrequentPlan();
        const totalAppointments = await getTotalAppointmentsCount();
        const basicPlanByMonth = await findBasicPlanByMonth();
        const premiumPlanByMonth = await findPremiumPlanByMonth();
        const allAppointmentsByMonth = await findAllAppointmentsByMonth();




          res.status(200).json({ basicPlanByMonth, premiumPlanByMonth, allAppointmentsByMonth,totalAppointments,mostFrequentPlan,success: true });
    } catch (error) {
        res.status(500).json({ error: "Server error", success: false });
    }
}
export default { dashboard, acceptAppointment, viewappointment, patientPage,packagePage};
