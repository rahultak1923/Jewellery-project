export const UserData = async()=>{
   const response = await fetch("http://localhost:8000/user",{method:"GET",})
   return await response.json()
}