
import prescription from "../models/prescriptionModel.js";
import appointment from "../models/appointment.js";
const addPrescription = async(req,res)=>{
    const {patientCNIC,numberOfFiles,files}   = req.body;
    if(!patientCNIC || !numberOfFiles || !files){
        return res.status(400).json({message:"incomplete content"});
    }else{
        try{
            const latestAppointment = await getLatestAppointment(patientCNIC);
            const appointmentId = latestAppointment._id;

            const  newPrescription = await appointment.findByIdAndUpdate(appointmentId, {
                $push: {
                    prescription: {
                        numberOfFiles,
                        files,
                    },
                },
            }, { new: true });
            return res.status(200).json({message:"prescription created",newPrescription:newPrescription.prescription});
        }catch(error){
            return res.status(400).json({message:error.message});
        }
    }
}
async function getLatestAppointment(patientCNIC) {
    try {
        const latestAppointment = await appointment.findOne({ patientCNIC })
            .sort({ appointmentdate: -1 }) // Sort by appointmentdate in descending order
            .exec(); // Execute the query

        return latestAppointment;
    } catch (err) {
        console.error("Error fetching the latest appointment:", err);
        throw err;
    }
}
export default {addPrescription};