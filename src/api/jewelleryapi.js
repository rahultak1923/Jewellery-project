export const JewelleryData = async()=>{
    const response = await fetch("http:localhost:8000//api/jewellery/fetchalljewellery",{method:"GET",

    });
    return await response.json();
}