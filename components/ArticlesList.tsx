import Image from "next/image"
import { ArrowUpRightIcon  } from '@heroicons/react/24/solid'
import ClientSideRoute from "./ClientSideRoute"

type Props = {
  articles: Article[]
}

function ArticlesList({articles}: Props) {
  return (
    <div>
      <hr className="border-[#1809ff] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 pb-24" >
        {
          articles.map(article => (
            <ClientSideRoute  key={article.number} route={`/${article.slug}`}>
            <div className='flex flex-col group cursor-pointer'>
              <div className=" relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image 
                className="object-cover object-center lg:object-center"
                src={article.coverImage}
                alt={article.title}
                fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black  rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold"> {article.title} </p>
                    <p> {article.date} </p>
                  </div>

                  <div className="flex flex-col md:flex-row 
              gap-y-2 md:gap-x-2 items-center">
                    {article.categories.map((cat, index) => (
                      <div key={index} className="bg-[#1809ff] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                        <p> {cat.title} </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold"> {article.title} </p>
                <p className="text-gray-500 line-clamp-2" > {article.description} </p>
              </div>

              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Article 
                <ArrowUpRightIcon  className="ml-2 h-4 w-4" />
              </p>
            </div> 
            </ClientSideRoute>
          ))
        }
      </div>
    </div>
  )
}

export default ArticlesList