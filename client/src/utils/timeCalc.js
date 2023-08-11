import moment from 'moment-timezone';

const formatCreatedAt = (createdAt) => {
    const colomboCreatedMoment = moment.utc(createdAt).tz('Asia/Colombo');
    const nowColombo = moment.tz('Asia/Colombo');
    const duration = moment.duration(nowColombo.diff(colomboCreatedMoment));
    
    if (duration.asSeconds() < 60) {
       return 'few seconds ago';
    } else if (duration.asHours() < 1) {
       if (Math.floor(duration.asMinutes()) === 1){
          return `${Math.floor(duration.asMinutes())} minute ago`;
       } else {
          return `${Math.floor(duration.asMinutes())} minutes ago`;
       }
    } else if (duration.asDays() < 1) {
       if (Math.floor(duration.asHours()) === 1){
          return `${Math.floor(duration.asHours())} hour ago`;
       } else {
          return `${Math.floor(duration.asHours())} hours ago`;
       }
    } else if (duration.asWeeks() < 1) {
       if (Math.floor(duration.asDays()) === 1){
          return `${Math.floor(duration.asDays())} day ago`;
       } else {
          return `${Math.floor(duration.asDays())} days ago`;
       } 
    } else {
       return colomboCreatedMoment.format('D MMMM [in] YYYY');
    }
 };


 export { formatCreatedAt };