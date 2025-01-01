import SectionLayout from "../../layouts/SectionLayout"
import ProgramCard from "../shared/ProgramCard"
import dumbell from "../../assets/dumbell.png"
import yoga from "../../assets/yoga.png"
import biceps from "../../assets/biceps.png"
import jogging from "../../assets/jogging.png"

const programData = [
    {
        title : "Strength Training",
        desc : "Our trainers will design that a progressive workout plans that proper achieve gains strength",
        imgSrc : dumbell
    },
    {
        title : "Basic Yoga",
        desc : "This program combines yoga with cardio & strength training to help lose weight & fitness",
        imgSrc : yoga
    },
    {
        title : "Body Builidng",
        desc : "For those looking to increse strength, build lean muscle, our strength & muscle",
        imgSrc : biceps
    },
    {
        title : "Weight Loss",
        desc : "Our weight loss programs are designed to help you make sustainable lifestyle changes",
        imgSrc : jogging
    }
]

const Programs = () => {
    return (
        <SectionLayout id={"programs"} className={"bg-primary-100 text-white py-20"}>
            <div className="flex justify-between items-center">
                <h1 className="text-4xl capitalize font-bold max-w-[450px]">the best programs we offers for you</h1>
                <p className="max-w-[480px] text-sm text-gray-300">We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels. Our aim is to help you achieve goals and maximize results. </p>
            </div>

            <div className="flex gap-4 justify-center mt-16">
                {
                    programData.map((data,index) => (
                        <ProgramCard key={index} title={data.title} desc={data.desc} imgSrc={data.imgSrc} />
                    ))
                }
            </div>
        </SectionLayout>
    )
}

export default Programs