import TestimonialCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <section className=" border-y border-gray-300 p-3 my-14">
      <h1 className="fontbold text-[0.94rem] md:text-2xl lg:text-4xl  text-center my-5 lg:my-10 lg:mb-14  ">
        Read trusted reviews from platform users
      </h1>
      <div className="flex flex-col gap-3 lg:flex-row justify-center lg:gap-1 xl:gap-7">
        <div className=" md:flex md:justify-center gap-5 lg:flex lg:flex-row lg:gap-1 xl:gap-7">
          <div className="flex flex-col gap-3 ">
            <TestimonialCard
              name="Jason Tatum"
              url="https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA="
              text=" Ive been a dedicated reader of this news website for months and I can confidently say that its my go-to source for staying informed The quality and diversity  provide valuable insights into the most pressing issues of our time of news coverage here are  keeping me updated on everything that matters in todays fast-paced world  "
            />
            <TestimonialCard
              name="Marcus Smart"
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4f4No_54QIRkBiTMoiSr00GM35hhgU17oTOwHZcfV&s"
              text="As a journalist myself, I appreciate a news website that values accuracy and in-depth reporting. "
            />
            <TestimonialCard
              name="Avery Bradley"
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiVfq_5emiSf1EEiXcMo9tTDXhFrwXkzg58DWJoBZog&s"
              text="I stumbled upon this news website a few months ago. The user-friendly layout and concise headlines make it easy to find the news that's relevant to me."
            />
          </div>
          <div className="flex flex-col gap-3">
            <TestimonialCard
              name="Doris Burke"
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeQqrugvKSzDBIP1fyRHPxbs2jEYy-jIpwyDUitLDyg&s"
              text="This news website has become an essential part of my morning routine.  Keep up the excellent work"
            />
            <TestimonialCard
              name="Jeff Green"
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwfBkAUTJef4U6XggWiIiznG71luoj_GR8MOQj-3e&s"
              text=" Ive recommended this news website to all my friends and  It covers a wide range of  from politics to science to  providing a well-rounded view of the.It offers a great mix of local and global news, and I particularly enjoy the op-eds and analysis pieces that help me understand the deeper context behind the headlines. "
            />
            <TestimonialCard
              name="Jennifer Washington"
              url="https://assets.chaminade.edu/wp-content/uploads/2018/07/08074029/Testimonial-Photo-Circle-AngieM1a.png"
              text="I stumbled upon this news website a few months ago, and its quickly become a part of my daily The user-friendly layout and concise headlines make it easy to find the news thats relevant to  and the balanced reporting helps me form a more informed  "
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:flex lg:flex-col">
          <TestimonialCard
            name="Cameron Diaz"
            url="https://media.gettyimages.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=gi&k=20&c=NHEzgNcz0NKt1jd5cHHoquA9efPrUjtB7yYD38BYrD0="
            text="I visit this news website daily, and it keeps me informed with its high-quality reporting. Its a reliable source I can count on for staying up-to-date on the latest news and event "
          />
          <TestimonialCard
            name="Paul Pierce"
            url="data:image/jpeg;base64,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"
            text="I stumbled upon this news website a few months ago, and its quickly become a part of my daily routine The user-friendly layout and concise headlines make it easy to find the news thats relevant to me and the balanced reporting helps me form a more informed perspectiv "
          />
          <TestimonialCard
            name="Guram Jinoria"
            url="https://media.istockphoto.com/id/1135381173/photo/portrait-of-a-young-man-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=J8DKGHI8o-oj8cY1CCNpFY2V9OmVVbJuKSO2DdbMvRg="
            text="This news website consistently delivers well-researched, thought-provoking articles that provide valuable insights into the most pressing issues of our time"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
