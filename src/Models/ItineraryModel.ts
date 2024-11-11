type Section = {
    title?: string;
    text?: string;
    image?: string;
};

export type Day = {
    summary: string;
    sections: Section[];
};

export type ItineraryModel = {
    itinerarySheetId: string;
    days: Day[];
};