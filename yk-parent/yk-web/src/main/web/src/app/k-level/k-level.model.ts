import { YuvanModel } from '../yuvan/yuvan.model';

export interface KLevelModel{
    country : string;
    sanghat : string;
    jilla : string;
    taluka : string;
    group : string;
    kendra : string;
    jSannidatha : YuvanModel;
    tSannidatha : YuvanModel;
    avekshak : YuvanModel;
    sanchalak1 : YuvanModel;
    sanchalak2 : YuvanModel;
    kendraType : string;
    yuvaYuvati : string;
    yearOfKendra : string;
    category : string;
    kendraNumber : string;
    status : string;
    yearMerged : string;
    mergedTo : string;   
    minAttendance : string;
    maxAttendance : string;
    villageOfYK : string;
    landMark : string;
    yKSthal : string;
    yKSthalPin : string;
    dayOfYK : string;
    timeOfYK : string;
    swadhyayLoc : string;
    swadhyayVillage : string;
    ykConducted : string;
}