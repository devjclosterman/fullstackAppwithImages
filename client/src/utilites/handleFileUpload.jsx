import { convertToBase } from "./convertToBase";

export const handleFileUpload = async (file) => {
    const base = await convertToBase(file)
    console.log(base)
    return base;
}