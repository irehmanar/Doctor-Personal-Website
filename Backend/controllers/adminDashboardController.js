import appointment from "../models/appointment.js";
import appointmentController from "./appointmentController.js";

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
                    if (currentMonth == 11) {
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
const viewappointment = async ({ req, res }) => {
    try {
        const today = new Date();
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const appointments = await appointment.find({
            appointmentdate: todayDate,
            appointmentStatus: "Pending",
          }).select("id appointmentdate appointmentStatus promotiontype endDate");
        res.json(appointments, { success: true });
    } catch (error) {
        console.error("Error viewing appointments:", error);
        res.status(500).json({ error: "Server error" }, { success: false });
    }
};
export default { dashboard , viewappointment}