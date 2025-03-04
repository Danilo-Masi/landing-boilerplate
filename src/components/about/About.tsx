import profile from '../../assets/profile-image.jpg';


export default function About() {
    return (
        <div className="w-full md:w-4/5 h-auto flex flex-col items-center gap-10 mt-52 text-zinc-50">
            {/* Immagine e primo paragrafo */}
            <div className='w-full md:w-3/4 h-auto md:max-h-[30svh] flex flex-col md:flex-row gap-5'>
                <img
                    alt='picture image'
                    src={profile}
                    className='w-1/2 md:w-1/4 rounded-lg' />
                <p className='text-balance'>
                    Hey, it's Marc 👋
                    <br />
                    <br />
                    In 2018, I believed I was Mark Zuckerberg, built a startup for 1 year, and got 0 users...
                    <br />
                    <br />
                    A few years after my burnout, I restarted the journey differently: I shipped like a madman—16 startups in 2 years. Now I'm happy and earn $45,000 a month.
                </p>
            </div>
            {/* Secondo paragrafo */}
            <div className='w-full md:w-3/4 flex gap-3'>
                <p>
                    I realized I was doing the same thing over and over: set up DNS records, listen to Stripe webhooks, design pricing section... So I built ShipFast for 3 reasons:
                    <br />
                    <br />
                    Save time and focus on what matters: building a business
                    Avoid headaches like emails ending in spam or handling Stripe subscriptions
                    Get profitable fast—the more you ship, the more you learn, the more you earn
                    <br />
                    <br />
                    135,000+ people trust me on Twitter, Product Hunt awarded me Maker of the Year 2023, and 6596 indie makers are using ShipFast to launch startups quickly, scroll to see what they say.
                </p>
            </div>
            {/* Video */}
            <div className='w-full min-h-[30svh] md:min-h-[80svh] flex items-center justify-center rounded-lg bg-red-300'>
                Video
            </div>
        </div>
    );
}
