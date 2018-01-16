import React from 'react';


function EventForm (props) {
  const {
    onSubmit = () => {},
    title = "",
    subtitle = "",
    about_info = "",
    when = "",
    where = "",
    trail = "",
    emergency_contacts = "",
    what_to_expect = "",
    required_gear = "",
    other_recommended_gear = "",
    read_more = ""
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      about_info: formData.get('about_info'),
      when: formData.get('when'),
      where: formData.get('where'),
      trail: formData.get('trail'),
      emergency_contacts: formData.get('emergency_contacts'),
      what_to_expect: formData.get('what_to_expect'),
      required_gear: formData.get('required_gear'),
      other_recommended_gear: formData.get('other_recommended_gear'),
      read_more: formData.get('read_more')
    })
  };

  console.log(title, subtitle, about_info, when, where, trail, emergency_contacts,
  what_to_expect, required_gear, other_recommended_gear, read_more)

  return (

    <form className="EventForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label><br />
        <input id='title' name='title' defaultValue={title}/>
      </div>
      <div>
        <label htmlFor='subtitle'>Subtitle</label><br />
        <input id='subtitle' name='subtitle' defaultValue={subtitle}/>
      </div>
      <div>
        <label htmlFor='about_info'>About Info</label><br />
        <input id='about_info' name='about_info' defaultValue={about_info}/>
      </div>
      <div>
        <label htmlFor='when'>When</label><br />
        <input id='when' name='when' type='date' defaultValue={when}/>
      </div>
      <div>
        <label htmlFor='where'>Where</label><br />
        <input id='where' name='where' defaultValue={where}/>
      </div>
      <div>
        <label htmlFor='trail'>Trail</label><br />
        <input id='trail' name='trail' defaultValue={trail}/>
      </div>
      <div>
        <label htmlFor='emergency_contacts'>Emergency Contacts</label><br />
        <input id='emergency_contacts' name='emergency_contacts' defaultValue={emergency_contacts}/>
      </div>
      <div>
        <label htmlFor='what_to_expect'>What to Expect</label><br />
        <input id='what_to_expect' name='what_to_expect' defaultValue={what_to_expect}/>
      </div>
      <div>
        <label htmlFor='required_gear'>Required Gear</label><br />
        <input id='required_gear' name='required_gear' defaultValue={required_gear}/>
      </div>
      <div>
        <label htmlFor='other_recommended_gear'>Other Recommended Gear</label><br />
        <input id='other_recommended_gear' name='other_recommended_gear' defaultValue={other_recommended_gear}/>
      </div>
      <div>
        <label htmlFor='read_more'>Read More</label><br />
        <input id='read_more' name='read_more' defaultValue={read_more}/>
      </div>
      <div>
    <input type='submit' value='Submit'/>
  </div>
    </form>

  )
}


export default EventForm;
