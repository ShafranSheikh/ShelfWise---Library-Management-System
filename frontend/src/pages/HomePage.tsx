import Card from '../components/Card'
import image1 from '../assets/temp/img1.png';
import image2 from '../assets/temp/img2.png';
import image3 from '../assets/temp/img3.png';
import image4 from '../assets/temp/img4.png';
import image5 from '../assets/temp/img5.png';
const HomePage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background '>
      <div className='bg-card p-8 rounded-xl shadow-lg w-full max-w-7xl  my-16 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <Card imageurl={image1} title='The Great Gatsby' author='F. Scott Fitzgerald' />
          <Card imageurl={image2} title='To Kill a Mockingbird' author='Harper Lee' />
          <Card imageurl={image3} title='Pride and Prejudice' author='Jane Austen' />
          <Card imageurl={image4} title='The Catcher in the Rye' author='J.D. Salinger' />
          <Card imageurl={image5} title='Moby-Dick' author='Herman Melville' />
        </div>
      </div>
    </div>
  )
}

export default HomePage