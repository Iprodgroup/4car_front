import NavBar from './../NavBar/NavBar';
// import PayDecor from '../../assets/payDecor.png';
// import payDecor2 from '../../assets/payDecor2.png';
import Footer from './../Footer/Footer';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import Link from 'next/link';

const Payment = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <header className=' bg-no-repeat bg-cover bg-center w-full pb-20 bg-diski'>
          <div className='container '>
            <NavBar />
            <div className='mt-28 px-4' data-aos='fade-right'>
              <h1
                className='font-forms font-bold 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 
                        2xl:text-start xl:text-start lg:text-start text-center flex flex-col text-white'
              >
                Оплата и доставка
              </h1>
            </div>
          </div>
        </header>
        <ScrollToTop />
        <main className='mt-10'>
          <section>
            <div
              data-aos='fade-up-right'
              data-aos-anchor-placement='center-bottom'
              className='container px-8'
            >
              <div className='flex flex-row font-forms mb-10'>
                <Link href='/' className='mr-1 underline cursor-pointer'>
                  Главная
                </Link>
                /<p className='ml-1'>Оплата и доставка</p>
              </div>
              <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm mb-6'>
                Покупая товары в нашем интернет-магазине, Вы соглашаетесь с
                условиями Публичной оферты.
              </p>
              <h2 className='text-primary text-4xl mb-8 font-semibold'>
                Оплата товара
              </h2>
              <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm max-w-[600px] mb-7'>
                Вы можете произвести оплату заказа любым удобным способом
              </p>
            </div>
          </section>
          <section className='py-4 bg-transparent text-black relative mb-10 -z-20'>
            <div className='container flex flex-row'>
            <b className='w-[1px] h-auto border-[2px] border-primary rounded-[2px]'/>

              <div
                // data-aos='fade-up-right'
                data-aos-anchor-placement='center-bottom'
                className='flex flex-col gap-5 max-w-[1040px] px-4'
              >
                <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                  <span className='font-bold'>Наличными</span> тенге курьеру
                  (только при доставке по г. Алматы) или в магазине при
                  самовывозе
                </p>
                <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                  <span className='font-bold'>Банковской</span> картой (Visa,
                  MasterCard, American Express, а также дебетные электронные
                  карты), эмитированной любым банком в процессе оформления
                  Вашего заказа онлайн. Оплата производится по защищенному
                  каналу через систему Авторизации АО ``Halykbank``. Удобно,
                  быстро, безопасно
                </p>
                <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                  <span className='font-bold'>Банковским</span> переводом на наш
                  расчетный счет в АО ``Halykbank`` после оформления Вашего
                  заказа онлайн и обязательного резервирования товара
                </p>
                {/* <img
                  src={PayDecor.src}
                  alt=''
                  className='absolute 2xl:max-h-[280px] xl:max-h-[280px] lg:max-h-[240px] 
                                md:max-h-[220px] sm:max-h-[240px]  max-h-[230px]  -z-10 bottom-0 right-0'
                /> */}
              </div>
            </div>
          </section>
          <section className=''>
            <div
              // data-aos='fade-up-right'
              data-aos-anchor-placement='center-bottom'
              className='container px-8'
            >
              <h2 className='text-primary text-4xl mb-8 font-semibold'>
                Доставка товара
              </h2>
              <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm max-w-[1000px] tracking-wide mb-7'>
                По г. Алматы: Интернет-магазин выполняет доставку товара
                собственной Службой доставки. Доставка осуществляется все дни
                недели, кроме воскресенья
              </p>
            </div>
          </section>
          <section className='py-10 bg-transparent text-black relative mb-16 -z-20'>
            <div className='container'>
              <div
                // data-aos='fade-up-right'
                data-aos-anchor-placement='center-bottom'
                className='max-w-[1040px] px-2 flex flex-row gap-4'
              >
                <b className='w-[1px] h-auto border-[2px] border-primary rounded-[2px]'/>
                <div className='flex flex-col gap-5'>
                  <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                    <span className='font-bold'>Бесплатная доставка:</span> по
                    г. Алматы при заказе на сумму свыше 80 000 тенге или 4 шины
                    доставка осуществляется бесплатно.
                  </p>
                  <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                    <span className='font-bold'>Платная доставка:</span> по г.
                    Алматы при заказе на сумму менее 80000 тенге стоимость
                    доставки - 1000 тенге
                  </p>
                  <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                    <span className='font-bold'>Стоимость доставки</span> в
                    отдаленные районы Алматы согласовывается отдельно. Вы также
                    можете забрать Ваш товар самостоятельно из нашего магазина.
                    В этом случае Вам необходимо связаться с нами и обязательно
                    зарезервировать Ваш товар и уточнить время. Время доставки
                    по г. Алматы
                  </p>
                  <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                    <span className='font-bold'>Стоимость доставки</span> в
                    отдаленные районы Алматы согласовывается отдельно.
                  </p>
                  <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm tracking-wide'>
                    <span className='font-bold'>Вы также можете забрать</span>{' '}
                    Ваш товар самостоятельно из нашего магазина. В этом случае
                    вам необходимо связаться с нами и обязательно
                    зарезервировать Ваш товар и уточнить время
                  </p>
                  <span className='font-bold'>Время доставки по г. Алматы</span>
                </div>
              </div>
            </div>
            {/* <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${payDecor2.src})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: '-10',
        }}
        className='parallax'
      /> */}
          </section>
          <section className='mb-10'>
            <div
              data-aos='fade-up-right'
              data-aos-anchor-placement='center-bottom'
              className='container px-8'
            >
              <h2 className='font-semibold text-primary 2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm mb-10'>
                Отправка заказа осуществляется после оплаты заказа. Отправка
                осуществляется ТОЛЬКО в рабочие дни.
              </h2>
              <p className='2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-md text-sm text-justify text-gray-500'>
                Внимание! Неправильно указанный номер телефона, неточный или
                неполный адрес могут привести к задержке выполнения Вашего
                заказа. Пожалуйста, внимательно проверяйте Ваши персональные
                данные при оформлении заказа. Конфиденциальность ваших данных
                гарантируется
              </p>
            </div>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Payment;
