import Link from "next/link"

export default function Page(){
  return(
    <div>
      <div className="flex w-full flex-row justify-center items-center">
        <Link href='/' className="bg-bold text-center hover:underline">Back Home</Link>
      </div>
      <h1 className='text-center font-extralight text-3xl my-24'>Shopping Cart</h1>
    </div>
  )
}