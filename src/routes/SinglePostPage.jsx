import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            libero quas eius qui consectetur amet aliquam est ducimus doloremque
            vel, recusandae nam nemo tenetur maiores quibusdam deleniti debitis
            repudiandae alias.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae nostrum, minima magni magnam non tempore esse eaque
            nesciunt nulla asperiores incidunt eos tenetur molestias? Iusto
            cupiditate totam porro iste alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dignissimos necessitatibus repudiandae numquam voluptatibus
            nesciunt, sunt eos aliquam perspiciatis, ut optio voluptatum labore
            sint velit. Consequatur eos quo sint laboriosam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            at obcaecati, praesentium fuga corporis nesciunt iusto similique
            incidunt repudiandae aliquid in iure non itaque distinctio tempora
            eaque vero? Mollitia, sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae nostrum, minima magni magnam non tempore esse eaque
            nesciunt nulla asperiores incidunt eos tenetur molestias? Iusto
            cupiditate totam porro iste alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dignissimos necessitatibus repudiandae numquam voluptatibus
            nesciunt, sunt eos aliquam perspiciatis, ut optio voluptatum labore
            sint velit. Consequatur eos quo sint laboriosam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            at obcaecati, praesentium fuga corporis nesciunt iusto similique
            incidunt repudiandae aliquid in iure non itaque distinctio tempora
            eaque vero? Mollitia, sit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae nostrum, minima magni magnam non tempore esse eaque
            nesciunt nulla asperiores incidunt eos tenetur molestias? Iusto
            cupiditate totam porro iste alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dignissimos necessitatibus repudiandae numquam voluptatibus
            nesciunt, sunt eos aliquam perspiciatis, ut optio voluptatum labore
            sint velit. Consequatur eos quo sint laboriosam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            at obcaecati, praesentium fuga corporis nesciunt iusto similique
            incidunt repudiandae aliquid in iure non itaque distinctio tempora
            eaque vero? Mollitia, sit.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">Search Engines</Link>
            <Link className="underline">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
