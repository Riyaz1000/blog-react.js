import { Link } from "react-router-dom";
import data from "../data/data.json";

const HomePage = () => {
  const BlogPost = data.map((post) => {
    return (
      //   <div className="flex items-center space-x-10 mt-3  key={val.id}">
      //     <img
      //       src="data:image/png;base64,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
      //  "
      //       className="w-20"
      //     ></img>

      //     <div
      //     className="md:p-5 mt-3 rounded md:flex items-center bg-secondary"
      //     key={value.id}
      //   >
      //  </div>

      <div className="mb-5">
        <Link to={"/BlogPost"}>
          <div className="bg-rose-200 mx-auto key={post.id} sm:p-8 sm:text-xl sm:space-x-2 sm:space-y-0 p-8 max-w-5xl text-xl font-semibold space-x-2 rounded shadow-md ">
            <p className="text-gray-900 font-Viga font-extrabold text-2xl sm:text-2xl">
              #{post.id}. {post.title}
            </p>

            <div className="flex flex-col sm:flex-row items-center ">
              <img
                src={post.image}
                alt="football club image"
                className=" w-36 rounded mt-3 "
              />
              <p className="font-semibold font-Viga mx-6 mt-3">
                {post.desc} <br />
                <button className="bg-blue-900 text-white hover:bg-blue-700 sm:mt-0 hover:text-white text-sm px-2 py-1 rounded">
                  <Link to={"/BlogPost"}> Read More </Link>
                </button>
              </p>
            </div>

            <div>
              <p className="font-bold mx-4  mt-2 text-sm sm:text-sm ">
                {" "}
                {post.date}{" "}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  // console.log(BlogPost);

  return (
    <div className="">
      {/* <h1 className="text-black font-bold mb-5  ">welcome to Homepage</h1> */}
      {BlogPost}
    </div>
  );
};

export default HomePage;
