import { useForm } from "react-hook-form"

export default function Booking(){
  const {register,handleSubmit,reset}=useForm()

  const onSubmit=async(data)=>{
    await fetch("https://script.google.com/macros/s/AKfycbxUtQw4XIB8Y_A_OAGXZO2dxdrjOT21-a-ZwCNgyPhxSd5BeFmgZZc_xEmiOPZFg_NEtA/exec",{
      method:"POST",
      mode:"no-cors",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify(data)
    })
    alert("Sent")
    reset()
  }

  return (
    <section id="booking" className="py-20 max-w-xl mx-auto">
      <h2 className="text-3xl font-display mb-6">Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="border p-3 w-full"/>
        <input {...register("email")} placeholder="Email" className="border p-3 w-full"/>
        <textarea {...register("message")} placeholder="Message" className="border p-3 w-full"/>
        <button className="bg-black text-white p-3 w-full rounded-xl">
          Send
        </button>
      </form>
    </section>
  )
}
