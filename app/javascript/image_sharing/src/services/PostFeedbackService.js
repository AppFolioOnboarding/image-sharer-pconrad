import { post } from '../utils/helper';
import { action } from 'mobx';


// class PostFeedbackService {
//
//   @action postFeedback = (formData, win = window) => {
//     const pathToSubmit = `${win.location.origin}/api/feedbacks`;
//     return post(pathToSubmit, formData);
//   }
//
// }
//
// export default PostFeedbackService;
//

export default function postFeedback(formData, win = window) {
    const pathToSubmit = `${win.location.origin}/api/feedbacks`;
    return post(pathToSubmit, formData);
}

