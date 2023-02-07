interface HabitProps {
  completed: number;
}

const Habit = ({ completed }: HabitProps) => {
  return (
    <div className="bg-zinc-900 w-10 h10 text-white rounded m-2 text-center flex items-center justify-center">
      {completed}
    </div>
  );
};

export default Habit;
