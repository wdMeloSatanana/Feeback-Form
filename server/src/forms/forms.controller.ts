import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { FormsService } from './forms.service';
import { Form } from './form.entity/form.entity';

@Controller('forms')
export class FormsController {
    constructor(private service: FormsService){}

    @Get(':id')
    get(@Param() params){
        return this.service.getForm(params.id);
    }

    @Post()
    create(@Body() form: Form){
        return this.service.createForm(form);
    }

    @Put()
    update(@Body() form: Form){
        return this.service.updateForm(form);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.deleteForm(params.id);
    }
    

}
