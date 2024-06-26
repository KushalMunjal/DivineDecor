// category
const category = [
    {
      image: "https://i.imgur.com/3peBnUp.png",
      name: "divine",
    },
    {
      image: "https://i.imgur.com/2pu8j7h.png",
      name: "ancient",
    },
    {
      image: "https://i.imgur.com/92Aazxz.png",
      name: "freedom fighter",
    },
    {
      image: "https://i.imgur.com/lqi34N1.png",
      name: "animal",
    },
    {
      image: "https://i.imgur.com/SAsaxdr.png",
      name: "pillars",
    },
    {
      image: "https://i.imgur.com/n4g9Jap.png",
      name: "mandaps",
    },
  ];
  
  const Category = () => {
    return (
      <div>
        <div className="flex flex-col mt-5">
          {/* main 1 */}
          <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
            {/* main 2  */}
            <div className="flex ">
              {/* category  */}
              {category.map((item, index) => {
                return (
                  <div key={index} className="px-3 lg:px-10">
                    {/* Image  */}
                    <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-500 transition-all hover:bg-blue-400 cursor-pointer mb-1 ">
                      <div className="flex justify-center mb-12">
                        {/* Image tag  */}
                        <img src={item.image} alt="img" />
                      </div>
                    </div>
  
                    {/* Name Text  */}
                    <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                      {item.name}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
  
        {/* style  */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
          }}
        />
      </div>
    );
  };
  
  export default Category;
  