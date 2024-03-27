import * as ACTIONS from "./questions-actions";
import getQuestions from "./getQuestions";
import { normalize, schema } from "normalizr";
import { MALE_RESULT_PAGE } from "../constants/constants";

const questionsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE_STATE: {
      const _state = localStorage.getItem("state" + window.location.pathname);
      if (_state) {
        return JSON.parse(_state);
      }
      const { data, previewURL } = action.payload;

      const question = new schema.Entity("questions");
      const mySchema = { questions: [question] };
      const { entities } = normalize(data, mySchema);

      const byId = entities.questions;
      const currentQuestion = data.questions[0];
      const firstQuestion = currentQuestion.id;
      const questionsList = getQuestions({ byId, firstQuestion });

      return {
        ...state,
        byId,
        currentQuestion,
        questions: questionsList,
        firstQuestion,
        previewURL,
      };
    }

    case ACTIONS.SAVE_QUESTION_REPLY:{
      const { reply, id } = action.payload;
      const question = state.byId[id];

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...question, reply },
        },
      };}

    case ACTIONS.SAVE_GENDER_REPLY: {
      const { genderReply, id } = action.payload;
      const question = state.byId[id];
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...question, genderReply },
        },
      };
    }

    case ACTIONS.MAKE_QUESTIONS_LIST:
     { const questions = getQuestions(state);

      return {
        ...state,
        questions,
      };}

    case ACTIONS.ADD_PREVIOUS_QUESTIONS:
      return {
        ...state,
        previousQuestions: [...state.previousQuestions, action.payload],
      };
      case ACTIONS.SAVE_QUESTIONS_OTHER_ATTRIBUTES:
        {const { value, id,key } = action.payload;
        const question = state.byId[id];
  
        return {
          ...state,
          byId: {
            ...state.byId,
            [id]: { ...question,[key]: value },
          },
        };
  
  }

  case ACTIONS.REMOVE_PREVIOUS_QUESTIONS:{
    const { byId, previousQuestions } = state;
    const previousQuestion = previousQuestions.pop();
    let hair_goals2 = window.localStorage.getItem("hair_goals2");
    if(previousQuestion==='hair_vol1'&& hair_goals2 !== "Improve Hair Quality"){
      const filteredOptionsObj = {
        ...state.byId["hair_vol1"],
        optionMap: state.byId["hair_vol1"].optionMap.filter(
          (e) => e.name !== "Texture Loss"
        ),
      };
      return {
        ...state,
        previousQuestion:[...previousQuestions],
        currentQuestion:filteredOptionsObj
      }
    }
    return {
      ...state,
      previousQuestions: [...previousQuestions],
      currentQuestion: byId[previousQuestion],
    };}

    case ACTIONS.SAVE_API_RESPONSE:
      return {
        ...state,
        apiResponse: action.payload,
      };

    case ACTIONS.SAVE_SLOTS:
      return {
        ...state,
        selectedSlots: action.payload,
      };

    case ACTIONS.SAVE_SLOTS_LIST:
      return {
        ...state,
        slots: action.payload,
      };

    case ACTIONS.NEXT_QUESTION: {
      const {  id } = action.payload;
      const question = state.byId[id];
      let nextId = question.next;
      const  primaryConcern=state.byId['skin_concern_primary'].reply;
      const secondaryConcern=state.byId['skin_concern_secondary'].reply;

      if(id==='family_history'&&nextId==='outdoor_duration'){
        if((['acne_pimples','acne_spots_marks'].includes(primaryConcern))||(['acne_pimples','acne_spots_marks'].includes(secondaryConcern)) ){
          nextId='acne_appearance'
        }else if(( ['wrinkles'].includes(primaryConcern)) ||['wrinkles'].includes(secondaryConcern)){
          nextId='fineline_description'
        }else if(( ['dark_spots'].includes(primaryConcern))||['dark_spots'].includes(secondaryConcern)){
          nextId='dark_patches'
        }
      }
    

      if(nextId==='skin_concern_secondary'){
        const  primaryConcern=state.byId['skin_concern_primary'].reply
       const  removeselectedOptionsOptions={
        ...state.byId["skin_concern_secondary"],
        optionMap:state.byId["skin_concern_secondary"].optionMap.filter(option => option.value!==primaryConcern)
       }
       return {
        ...state,
        currentQuestion:removeselectedOptionsOptions
       }
      }
     
      return {
        ...state,
        currentQuestion: nextId ? state.byId[nextId] : null,
      };
    }

    case ACTIONS.SET_PREVIEW_URL: {
      let { url } = action.payload;
      if (!url) url = MALE_RESULT_PAGE;

      return {
        ...state,
        previewURL: url,
      };
    }

    case ACTIONS.SET_FORM_ALL_QUESTIONS_FILLED: {
      return {
        ...state,
        allQuestionsFilled: action.payload.flag,
      };
    }
    case ACTIONS.CHANGE_QUESTION_LANGUAGE: {
      return {
        ...state,
        isHindi: action.payload.flag,
      };
    }
    case ACTIONS.SET_FORM_IS_MALE: {
      return {
        ...state,
        isMale: action.payload.flag,
      };
    }

    default:
      return state;
  }
};

export default questionsReducer;
