import link from "next/link";
export default function home(){
return (
<div>
<center className ="bg-rose-600">This is header</center>
<center className ="bg-indigo-900">Introduction My Self</center>
<br />
<h1>My name is Muhammad Owais I'm the student of thursday Morning(9-12) this is my first assignment</h1>
<center className="bg-pink-600">This Hero Section</center>
<center className="bg-yellow-200"> believe your self</center>
<p>self-believe is a powerful force trusting in your abilites and ambracing your uniqueness allow you to shine in your own own way remember that every successfull person
started with a belief in themselves cultivate that inner confidence and watch how it transforms your journey.  
</p>
<br />

<center className="bg-blue-500">Create your own path</center>
<p>you have power to create your own path don't be afraid to step outside the conventional and pursue what truly  inspires you.listen to your heart follow your passion and canvenss it a journey .the opinionsof other should not dictate your choices only yuo know what makes you feel alive trust your life</p>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button
</button>

<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">previous</button>
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
    Next
  </button>
  <center className="bg-teal-950">This is footer</center>
<p>progress doesn't always have to be mpnomental.every small you take atowared your goals counts and contributes to your overall journey celebrate thode little victores</p>

  </div>
)
}