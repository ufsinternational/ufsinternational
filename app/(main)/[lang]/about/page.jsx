import { getDictionary } from "@/lib/langDictionaries"
import ButtonHandler from "@/components/ui/button-handler"
import ProfileHandler from "@/components/ui/profile-handler"

async function AboutPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const about = dictionary?.about || { title: 'Error', history: { text: '', image: '' }, members: [] }
  const button_style = "bg-purple-700 hover:bg-purple-900 text-white py-2 px-4 rounded mr-8"; // Tailwindcss class assign for the position section buttons

  return (
    <div className="p-10 px-4 flex flex-col items-center md:justify-start md:items-start mb-24 md:mb-0">
      <h1 className="text-accent text-4xl md:text-5xl font-semibold mb-4 md:mb-8 leading-[1.2] md:leading-[1.5]">
        {about.history.title}
      </h1>
      <div className="pl-4 w-100% flex md:flex-row">
        <p className="pr-4 flex items-center">{about.history.text}</p>
        <img src={about.history.image} alt="History" />
      </div>
      <div className="pl-4 w-full flex md:flex-row">
        <ButtonHandler 
          buttonStyle={button_style} 
          buttons={[
            { name: 'mission', text: about.position.mission.title, displayText: about.position.mission.text},
            { name: 'vision', text: about.position.vision.title, displayText: about.position.vision.text},
            { name: 'values', text: about.position.values.title, displayText: about.position.values.text},
          ]}
        />
      </div>
      <div>
        <h1 className="pt-16 text-accent text-4xl md:text-5xl font-semibold mb-4 md:mb-8 leading-[1.2] md:leading-[1.5]">
          {about.members.title}
        </h1>
        <ProfileHandler profiles={about.members.profiles} />
      </div>
      <span className="pb-40"></span>
    </div>
  )
}

export default AboutPage