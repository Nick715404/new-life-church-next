export interface ISpeaker {
  data: ISpeakerData[]
}

export interface ISpeakerData {
  id: number,
  attributes: {
    name: string,
    description: string,
    image: {
      data: {
        id: number,
        attributes: {
          name: string,
          alternativeText: null | string,
          caption: null | string,
          width: number,
          height: number,
          formats: {
            medium: [Object],
            thumbnail: [Object],
            small: [Object],
            large: [Object]
          },
          hash: string,
          ext: string,
          mime: string,
          size: number,
          url: string,
          previewUrl: null | string,
          provider: string,
          provider_metadata: null | string,
          createdAt: string,
          updatedAt: string,
        }
      }
    }
    createdAt: Date,
    updatedAt: Date
  }
}