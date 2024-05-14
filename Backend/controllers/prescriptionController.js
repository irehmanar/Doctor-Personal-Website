
import prescription from "../models/prescriptionModel.js";

const addPrescription = async(req,res)=>{
    const {patientCNIC,numberOfFiles,images}   = req.body;
    if(!patientCNIC || !numberOfFiles || !images){
        return res.status(400).json({message:"incomplete content"});
    }else{
        try{
            const new_prescription = await prescription.create({
                patientCNIC:patientCNIC,
                numberOfFiles:numberOfFiles,
                images:images
            });
            return res.status(200).json({message:"prescription created",new_prescription});
        }catch(error){
            return res.status(400).json({message:error.message});
        }
    }
}
export default {addPrescription};