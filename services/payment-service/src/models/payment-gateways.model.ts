import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class PaymentGateways extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    name: 'gateway_type',
  })
  gatewayType: string;

  @property({
    type: 'boolean',
    required: true,
  })
  enabled: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line
  [prop: string]: any;

  constructor(data?: Partial<PaymentGateways>) {
    super(data);
  }
}
