const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Mother",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I would like to thank you once again for the excellent care you provided me the past nine months. With my extra visits being pregnant with twins, you have been very accomidating to my hectic schedule having two kids already at home. Thanks so much for everything.",
  },
  {
    name: "June Cha",
    position: "Mother",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Dr. Placek is a wonderful gynecologist. Empathetic, knowledgeable, patient, reasonable. Really listens to the patient. Can’t recommend highly enough.",
  },
  {
    name: "Iida Niskanen",
    position: "Mother",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "My husband and I would like to thank you for taking part in the birth of our little baby girl, Shaylan. We all know that the tension was high that day. We felt very comfortable and confident knowing that you would be able to handle any situation if one was to arise. You are amazing! You knew when to be serious and when to make us laugh. We will never forget that day or you..!",
  },
  {
    name: "Renee Sims",
    position: "Mother",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Thank you for your care during my pregnancy and for the safe delivery of our baby.",
  },
  {
    name: "Jenifer Nunfiez",
    position: "Mother",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "Thank you so much for bringing our sweet Ashley into the world safe and healthy. It is because of your concern and expertise that I had an unremarkable pregnancy and carried to full term. Your practice is responsible for delivering both of our miracles and we couldn't be more grateful. Thank you..!",
  },
  {
    name: "Sasha Ho",
    position: "Mother",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I have been able to continue with my regular routine of yoga, fitness classes and carrying my toddler without any pregnancy discomfort. I leave here knowing my body and mind are ‘set’ and feeling aligned, balance and overall healthier.",
  },
  {
    name: "Veeti Seppanen",
    position: "Mother",
    photo: "https://randomuser.me/api/portraits/women/97.jpg",
    text: "We would like to say a special “Thank You” to each and every one of you. We are all home happy and healthy because of all the love and support we have received over the last few months. We are truly blessed by these tiny and amazing little miracles.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
