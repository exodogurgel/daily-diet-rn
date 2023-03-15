/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      new: {
        id?: string
      }
      feedback: {
        inDiet: boolean
      }
      statistics: {
        percentInDiet: number
      }
      meal: {
        id: string
      }
      edit: {
        id: string
      }
    }
  }
}
