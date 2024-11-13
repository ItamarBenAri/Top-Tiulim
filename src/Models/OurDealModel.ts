export class MediaLinkModel {
    public type: 'image' | 'video';
    public url: string;
}

export class OurDealModel {
    public id: number;
    public country: string;
    public destination: string;
    public title: string;
    public description: string;
    public date: string;
    public price: number;
    public mediaLinks: MediaLinkModel[];
    public itinerarySheetId?: string;
    public lastSpots: boolean;
}