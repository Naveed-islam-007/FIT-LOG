import Image from "next/image";
import AddToPlanButton from "@/components/AddToPlanButton";
import { Exercise } from "@/type";
import SaveButton from "@/components/SaveButton";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getExercises = async () => {
  
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const exercisesData = await getExercises();
  const item = exercisesData.find(
    (exercise: Exercise) => Number(exercise.id) === Number(id),
  );

  

  return (
    <div className="container mx-auto px-4 py-10 bg-black">
      <div className="card lg:card-side overflow-hidden border border-neutral-800 bg-black shadow-xl">
       
        <figure className="relative bg-neutral-900 lg:w-2/5">
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={700}
            className="h-full min-h-[400px] w-full object-cover lg:min-h-[550px]"
          />
        </figure>

        
        <div className="card-body justify-center lg:w-3/5 lg:p-10 text-white">
          {/* Muscle Groups */}
          <div className="flex flex-wrap items-center gap-2">
            {item.muscleGroups.map((tag: string) => (
              <span
                key={tag}
                className="badge border-none bg-lime-400 font-bold text-black"
              >
                {tag}
              </span>
            ))}
          </div>

         
          <h1 className="mt-3 text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl">
            {item.name}
          </h1>

         
          <p className="text-neutral-400">{item.description}</p>

         
          <div className="my-4 overflow-hidden rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Equipment
              </span>
              <span className="font-bold text-white">{item.equipment}</span>
            </div>

            <div className="flex items-center justify-between bg-black px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Difficulty
              </span>
              <span className="font-bold text-white">{item.difficulty}</span>
            </div>

            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Sets
              </span>
              <span className="font-bold text-white">{item.sets}</span>
            </div>

            <div className="flex items-center justify-between bg-black px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Reps
              </span>
              <span className="font-bold text-white">{item.reps}</span>
            </div>

            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Duration
              </span>
              <span className="font-bold text-white">{item.duration} min</span>
            </div>

            <div className="flex items-center justify-between bg-black px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Calories
              </span>
              <span className="font-bold text-white">
                {item.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 text-sm">
              <span className="text-xs uppercase text-neutral-500">
                Rating
              </span>
              <span className="font-bold text-white">{item.rating}</span>
            </div>
          </div>

         
          <div className="mt-2">
            <h3 className="mb-2 text-lg font-bold text-white">
              Instructions
            </h3>
            <ol className="list-inside list-decimal space-y-2 text-neutral-300">
              {item.instructions.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

         
          <div className="card-actions mt-4">
            <AddToPlanButton item={item} />
            <SaveButton item={item}></SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;