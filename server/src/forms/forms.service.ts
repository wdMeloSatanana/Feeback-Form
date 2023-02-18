import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './form.entity/form.entity';


@Injectable()
export class FormsService {
    constructor(@InjectRepository(Form) private formRepository: Repository<Form>){}

    async getForms(form: Form): Promise<Form []>{
        return await this.formRepository.find();
    }

    async getForm(_id: number): Promise<Form[]>{
        return await this.formRepository.find({
            select: ["name", "email", "sent", "message"],
            where: [{"id": _id}]
        })
    }

    async createForm(form: Form){
        return await this.formRepository.createQueryBuilder().insert().into(Form).values(form).execute();
    }

    async updateForm(form: Form){
        this.formRepository.save(form)
    }

    async deleteForm(form: Form){
        this.formRepository.delete(form);
    }

}
