import { YuvaModel } from '../yuva/yuva.model';

export interface KLevelModel{
    country : string;
    sanghat : string;
    jilla : string;
    taluka : string;
    group : string;
    kendra : string;
    jSannidatha : YuvaModel;
    tSannidatha : YuvaModel;
    avekshak : YuvaModel;
    sanchalak1 : YuvaModel;
    sanchalak2 : YuvaModel;
    kendraType : string;
    yuvaYuvati : string;
    yearOfKendra : string;
    kendraCategory : string;
    kendraNumber : string;
    status : string;
    yearMerged : string;
    mergedTo : string;   
    minAttendance : string;
    maxAttendance : string;
    villageOfYK : string;
    landmark : string;
    yKSthal : string;
    yKSthalPin : string;
    dayOfYK : string;
    timeOfYK : string;
    swadhyayLoc : string;
    swadhyayVillage : string;
    ykconducted : string;
}