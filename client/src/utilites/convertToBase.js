export async function convertToBase(img) {
    return new Promise( async (resolve, reject) => {
        const fileReader = new FileReader();
        await fileReader.readAsDataURL(img)
        fileReader.onload = (() => {
            resolve(fileReader.result)
        });
        fileReader.onerror = (() => {
            console.error('CovertToBase function error - unable to convert')
        })
    })
}