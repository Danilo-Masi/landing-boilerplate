import feature1 from '../../assets/feature1.webp';

export default function FeaturesImaages() {
    return (
        <div className="w-full md:w-[calc(50%-0.75rem)] h-auto max-h-[70svh] rounded-xl">
            <img
                src={feature1}
                alt='feature image'
                className='object-cover w-full h-full rounded-xl' />
        </div>
    );
}
