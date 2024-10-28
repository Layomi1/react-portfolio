import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card';
import cardDetails from './data';


function App() {

  return (
    <div className='w-full'>
     <div className='flex flex-col w-full h-50 bg-darkray text-white h-[60vh] px-2 mx-auto items-center pt-20 border-b-2 border-white'>
     <Header/>
      <h1 className='flex flex-col  mt-7 text-4xl text-center mb-2  font-md md:text-5xl font-sans'>Oluwalayomi <span className='text-7xl md:text-8xl '>Lawore</span></h1>
      <p className='text-center px-14 md:text-2xl md:px-50 mt-4 mb-4  '>
      A software engineer with proficiency in<span>  JavaScript, Reactjs, Angular, TypeScript, Version Control Systems, Tailwind, Bootstrap  </span>
      </p>
    
     </div>
      <main className='bg-coral grid  w-full md:grid-cols-3 gap-6 flex-wrap px-16 min-h-[100vh] py-20'>
      
        {
          cardDetails.map((card, id) =>
            <div key={id}>
               <Card  title={card.title} description={card.description} link={card.link} backgroundColor={card.backgroundColor} />
            </div>
           
          )
        }
        
      <Card/>

      </main>
      <Footer/>
    </div>
  )
}

export default App
