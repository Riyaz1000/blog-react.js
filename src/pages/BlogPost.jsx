import { useParams } from "react-router-dom";
import data from "../data/data.json";
function BlogPost() {
  const { id } = useParams();
  const selectedValue = data.find((value) => {
    return value.id == id;
  });

  return (
    <div className="bg-[#10154a] text-black font-Viga font-semibold pt-2 mb rounded ">
      <div className="flex ml-[310px]">
        <img
          src="https://www.indiansuperleague.com/static-assets/images/club/461/656.png?100.41"
          alt=""
          srcset=""
          className="w-10 h-10"
        />
        <img
          src="https://www.indiansuperleague.com/static-assets/images/club/461/505.png?100.41"
          alt=""
          srcset=""
          className="w-10 h-10"
        />
        <img
          src="https://www.indiansuperleague.com/static-assets/images/club/461/1102.png?100.41"
          alt=""
          srcset=""
          className="w-10 h-10"
        />
        <img
          src="https://www.indiansuperleague.com/static-assets/images/club/461/496.png?100.41"
          alt=""
          srcset=""
          className="w-10 h-10"
        />
        <img
          src="https://www.indiansuperleague.com/static-assets/images/club/461/1536.png?100.41"
          alt=""
          srcset=""
          className="w-10 h-10"
        />
        <img
          src="https://www.indiansuperleague.com/static-assets/images/club/461/1159.png?100.41"
          alt=""
          srcset=""
          className="w-10 h-10"
        />
      </div>
      <p className="text-white text-xs font-thin mt-4 ml-[315px]">
        <span className="text-yellow-500">Home</span> /
        <span className="text-yellow-500"> News</span> / NorthEast United FC
        rope in Moroccan defender Hamza Regragui{" "}
      </p>

      <p className="text-white font-Viga  text-xl mt-4 text-center font-semibold">
        NORTHEAST UNITED FC ROPE IN MOROCCAN DEFENDER HAMZA REGRAGUI
      </p>
      <p className="text-gray-400 text-xs ml-[315px] mt-2 mb-1">
        {" "}
        12 January, 2024
      </p>

      <div className=" p-10 bg-slate-300 text-black text-center  ">
        <img
          src="https://www.indiansuperleague.com/static-assets/waf-images/36/e5/db/16-9/cNuDJCX598.png?v=100.41&w=1200"
          alt="/"
          srcset=""
          className="w-[700px] ml-[260px] rounded"
        />
        <p className="text-black">
          <br />
          (Image Credit: Hamza Regragui Instagram Profile) Indian Super League{" "}
          <hr /> <br />
          (ISL) outfit NorthEast United FC have acquired the services of
          Moroccan U-23 international Hamza Regragui,
          <br /> the club announced on Friday. Regragui joins the Highlanders on
          a one-and-a-half-year deal from Wydad AC. <br /> The defender embarked
          on his football journey abroad with Spain's Málaga CF U-19 before{" "}
          joining RS Berkane, <br /> where he made 163 appearances and won six
          trophies. During his time at RS Berkane, Hamza won the CAF Super Cup,
          <br />
          CAF Confederations Cup (2) and the Moroccan Cup (3). In July 2023, he
          made the move to Wydad AC, runners-up of the
          <br /> 2022-23 CAF Champions League. Now, he is set to make his mark
          in the ISL with the Highlanders, showcasing his <br />
          technical ability and champion mentality.
        </p>
      </div>
    </div>
  );
}
export default BlogPost;
