import Image from 'next/image';

export default async function Home() {
  return (
    <main>
      <section className='home section' id='home'>
        <div className='container'>
          <div className='intro'>
            <img
              src='/img/profile.png'
              alt='Robel Fekadu Profile'
              className='shadow-dark'
              // width='100'
              // height='100'
            />
            <h1>Robel Fekadu</h1>
            <p>Pullstack Developer</p>
            <div className='social-links'>
              <a href='https://twitter.com/robavelii' target='_blank'>
                <i className='fa fa-twitter' />
              </a>
              {/* <a href='https://facebook.com/' target='_blank'>
                <i className='fa fa-facebook' />
              </a> */}
              <a href='https://github.com/robavelii' target='_blank'>
                <i className='fa fa-github' />
              </a>
              <a href='https://instagram.com/robavelii' target='_blank'>
                <i className='fa fa-instagram' />
              </a>
              <a href='https://linkedin.com/in/robavelii' target='_blank'>
                <i className='fa fa-linkedin' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

