export interface ISpeaker {
  speakers: {
    data: ISpeakerData[]
  },
}

export interface ISpeakerData {
  id: number,
  attributes: {
    name: string,
    description: string,
    createdAt: Date,
    updatedAt: Date
  }
}