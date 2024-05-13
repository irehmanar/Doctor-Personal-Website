import appointment from "../models/appointment.js";

const dashboard = async ({ req, res }) => {
    try {
        const today = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const dailyPatientAvg = await appointment.aggregate([ // Use 'appointment' directly
            {
                $match: {
                    appointmentdate: {
                        $gte: oneMonthAgo,
                        $lte: today
                    },
                    appointmentType: {
                        $eq: "New"
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
                    },
                    appointmentType: {
                        $eq: "New"
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
                    },
                    appointmentType: "New"
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
                    appointmentType: "New"
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
                    if (!yearchange){
                    months.push({ month: monthName, year: currentYear - 1, totalIncome: monthlyIncome.length > 0 ? monthlyIncome[0].totalIncome : 0 });}
                    else{
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

         
    const newPatients = await user.aggregate([
        {
          $lookup: {
            from: 'appointment',
            localField: 'cnic',
            foreignField: 'patientCNIC',
            as: 'appointments'
          }
        },
        {
          $unwind: '$appointments' // Unwind appointments for each user
        },
        {
          $match: {
            'appointments.appointmentdate': { $gte: todayDate, $lte: today },
            'appointmentCounter': 1   // Filter for users with appointmentCounter = 1
          }
        },
        {
          $group: {
            _id: null,
            count: { $sum: 1 } // Count the number of documents
          }
        },
        {
            $project: {
                _id: 0,
                count: '$count'
            }
        }
      ]);
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
    const malepatients = await user.aggregate([
        {
          $match: {
            gender: 'Male',
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
    const femalepatients = await user.aggregate([
        {
          $match: {
            gender: 'Female',
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
  
        const malePatients = malepatients.length > 0 ? malepatients[0].count : 0;
        const femalePatients = femalepatients.length > 0 ? femalepatients[0].count : 0;
        const foreignPatients = patientsByForeignlocation.length > 0 ? patientsByForeignlocation[0].count : 0;
        const localPatients = patientsByLocallocation.length > 0 ? patientsByLocallocation[0].count :0;
        const newPatientsCount = newPatients.length > 0 ? newPatients[0].count : 0;
        const monthlyAverage = dailyPatientAvg.length > 0 ? dailyPatientAvg[0].monthlyAverage : 0;
        const dailyIncome = dailyincome.length > 0 ? dailyincome[0].totalIncome : 0;
        const monthlyIncomeValue = monthlyIncome.length > 0 ? monthlyIncome[0].totalmonthlyincome : 0;
        const totalIncomeValue = overallIncome.length > 0 ? overallIncome[0].totalincome : 0;
        res.json({ monthlyAverage, dailyIncome, monthlyIncomeValue, totalIncomeValue, incomeByMonth: await findIncomeByMonth() ,newPatientsCount,localPatients,foreignPatients,malePatients,femalePatients});
    } catch (error) {
        console.error("Error calculating monthly patient average:", error);
        res.status(500).json({ error: "Server error" }, { success: false });
    }
};
const viewappointment = async ({ req, res }) => {
    try {
        const today = new Date();
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const appointments = await appointment.find({
            appointmentdate: todayDate,
            appointmentStatus: "Pending",
        }).select("id appointmentdate appointmentStatus promotiontype planChosen duration")
        const modifiedAppointments = appointments.map(Appointment => {
            const { promotionIncome, ...rest } = Appointment;
            return { ...rest, duration: promotionIncome };
        });
        for (const a of modifiedAppointments) {
            let duration;
            if (a.planChosen === "Basic") {
            duration = await promotion.findOne({ title: a.promotiontype }).select("duration");
            }
            else if (a.planChosen === "Premium") {
            duration = await PremiumPlans.findOne({ title: a.promotiontype }).select("duration");
            }
            else if (a.planChosen === "Therapeutic Plan") {
            duration = await TherapeuticPlan.findOne({ title: a.promotiontype }).select("duration");
            }
            let timespan = duration.duration
            a.duration = timespan;
        }
        res.status(200).json({ success: true, modifiedAppointments });
    } catch (error) {
        console.error("Error viewing appointments:", error);
        res.status(500).json({ error: "Server error", success: false });
    }
};
const acceptAppointment = async ({ req, res }) => {
    try {
        const today = new Date();
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const appointments = await appointment.findOne({
            appointmentdate: todayDate,
            appointmentStatus: "Pending",
        }).sort({ appointmentdate: 1 });
        if (appointments) {
            appointments.appointmentStatus = "Approved";
            await appointments.save();
            res.status(200).json({ success: true, message: "Appointment accepted successfully" });
        } else {
            res.status(404).json({ error: "No pending appointments found", success: false });
        }
    } catch (error) {
        console.error("Error accepting appointment:", error);
        res.status(500).json({ error: "Server error", success: false });
    }
};
export default { dashboard ,acceptAppointment,viewappointment};