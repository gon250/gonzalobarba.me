export interface CodeType {
  type: CodeTypesEnum
  content: {
    title: string
    subType?: CodeSubtypesEnum
    url: string
    codeUrl: string
    description: string
  }[]
}

export enum CodeTypesEnum {
  ANDROID = 'Android',
  BOOKS = 'Books',
  JAVASCRIPT = 'Javascript',
}

export enum CodeSubtypesEnum {
  JAVA = 'Java',
  KOTLIN = 'Kotlin',
  Fluuter = 'Flutter',
}

export const data: CodeType[] = [
  {
    type: CodeTypesEnum.ANDROID,
    content: [
      {
        title: '',
        subType: CodeSubtypesEnum.JAVA,
        url: '',
        codeUrl: '',
        description: '',
      },
    ],
  },
]
