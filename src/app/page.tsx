
export default function Home() {
  return (

    <>

        <section className="flex items-center justify-center min-h-screen bg-black">
          <div className="relative flex items-center justify-center" style={{ width: '100%', height: '100vh' }}>
            <video
              className="w-full h-full object-cover rounded-lg shadow-lg"
              src="./vid/main.mp4"
              loop
              autoPlay
              muted
            ></video>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-4xl text-shadow-2xs font-serif bg-opacity-40 px-6 py-2 rounded-l">
                💘Guru & Ananya
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <br />
            <p className="text-lg text-white font-serif max-w-4xl mx-auto md:pl-[150px] md:pr-[150px] pl-0 pr-0">
              Once upon a time, in the bustling city of Mumbai, two souls crossed paths in the most unexpected way. Guru, a passionate coder with a love for technology, and Ananya, a creative spirit with a heart full of dreams, found themselves drawn to each other amidst the chaos of everyday life.
            </p>
          </div>
        </section>
        <br />

        <section className="">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Wedding Details</h2>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {[
                {
                  title: 'Mehndi Ceremony',
                  details: 'Monday, 10:00 AM – 8:00 PM',
                  desc: 'Join us for beautiful henna art, music, and fun!'
                },
                {
                  title: 'Sangeet Night',
                  details: 'Tuesday, 7:00 PM – 11:00 PM',
                  desc: 'A night of dance, music, and celebration with family and friends.'
                },
                {
                  title: 'Wedding Ceremony',
                  details: 'Wednesday, 9:00 AM – 2:00 PM',
                  desc: 'Traditional rituals and vows as Guru & Ananya begin their new journey.'
                },
                {
                  title: 'Reception & Dinner',
                  details: 'Wednesday, 7:00 PM onwards',
                  desc: 'Celebrate with a grand feast, music, and joy!'
                }
              ].map((event, idx) => (
                <div
                  key={event.title}
                  className="border-4 border-black bg-gradient-to-br from-gray-100 to-gray-00 h-40 w-44 md:h-60 md:w-80 lg:h-72 lg:w-96 rounded-xl shadow-lg flex flex-col items-center justify-center text-base md:text-xl font-semibold text-gray-800 mb-8 transition-all duration-300 p-4 text-center"
                  style={{ borderColor: '#C0C0C0' }}
                >
                  <div>
                    <div className="font-bold text-lg md:text-2xl mb-2">{event.title}</div>
                    <div className="text-sm md:text-base mb-1">{event.details}</div>
                    <div className="text-xs md:text-sm text-gray-600">{event.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          
        </section>
        </>
     
    );
  }
