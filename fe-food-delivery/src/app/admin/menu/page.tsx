import AddCategory from "./_components/addCategory";
import AddDishCard from "./_components/addDishCard";

const adminMenuPage = () => {
  return (
    <div>
      menu hoooy
      <div className="max-w-md mx-auto p-6">
        <AddCategory />
        <AddDishCard />
      </div>
    </div>
  );
};

export default adminMenuPage;
