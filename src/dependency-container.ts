import { PersonCreator } from './person/domain/service/person-creator.services'
import { PersonCreatorImpl } from './person/use-case/person-creator-impl.usecase'
import { PersonWriter } from './person/domain/repository/person-writer.repositories'
import { PersonWriterImpl } from './person/infrastructure/api1/person-writer-impl.infrastructure'
//import { PersonWriterImpl } from './person/infrastructure/api2/person-writer-impl.infrastructure'

const personWriter: PersonWriter = new PersonWriterImpl()
const personCreator: PersonCreator = new PersonCreatorImpl(personWriter)

export { personCreator }
