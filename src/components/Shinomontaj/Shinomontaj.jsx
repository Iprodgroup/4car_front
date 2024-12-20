import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import Link from 'next/link';

const Shinomontaj = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-contact'>
          <div className='container '>
            <NavBar />
            <div className='mt-28 px-4' data-aos='fade-right'>
              <h1
                className='font-forms font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
              >
                Шиномонтаж
              </h1>
            </div>
          </div>
        </header>
        <ScrollToTop />
        <main className='mt-10 mb-16'>
          <div className='container'>
            <section
              data-aos='fade-right'
              data-aos-anchor-placement='center-bottom'
              className='px-4'
            >
              <div className='flex flex-row font-forms mb-10'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /<p className='ml-1'>Шиномонтаж</p>
              </div>
              <h2 className='2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl text-3xl max-w-[700px] font-semibold mb-8'>
                Cкидка на шиномонтаж в Алматы
              </h2>
              <p className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md mb-10 tracking-wide'>
                Интернет магазин 4car.kz не имеет собственного шиномонтажа
                вместо этого мы договорились с шиномонтажами, чтобы они
                предоставили скидку для вас.
              </p>
              <p className='2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-md mb-8 tracking-wide'>
                Для получения скидки необходимо прибрести шины или диски у нас и
                получить купон!
              </p>
            </section>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Shinomontaj;
