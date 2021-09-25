//easy_graphql_comment_start
/*
	key_request_history_idx
	key_data_idx
	ip
	result
	regist_datetime
	update_datetime
	
*/
//easy_graphql_comment_end
import { Table, AutoIncrement, PrimaryKey, Column, DataType, Sequelize , Model } from "sequelize-typescript";
import { ObjectType, Field, Int, InputType , Float } from "type-graphql";
const BigInt = require('graphql-bigint')

@Table({
    timestamps:false,
    tableName: 'key_request_history'
})
    
 
@ObjectType()
export class KeyRequestHistory extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({type: DataType.BIGINT({ length : 20 })  })
	@Field(_ => BigInt ,{ nullable: true })
	key_request_history_idx?: number

	@Column({type: DataType.BIGINT({ length : 20 })  })
	@Field(_ => BigInt ,{ nullable: true })
	key_data_idx?: number

	@Column({type: DataType.STRING({ length : 20 })  })
	@Field({ nullable: true })
	ip?: string

	@Column({type: DataType.STRING({ length : 20 })  })
	@Field({ nullable: true })
	result?: string

	@Column({type: DataType.DATE , defaultValue : Sequelize.literal('CURRENT_TIMESTAMP') })
	@Field({ nullable: true })
	regist_datetime?: Date

	@Column({type: DataType.DATE , defaultValue : Sequelize.literal('CURRENT_TIMESTAMP') })
	@Field({ nullable: true })
	update_datetime?: Date

}

@ObjectType()
export class SelectKeyRequestHistoryListReturn {
    @Field(type => Int)
    count?: number;

    @Field(type => [KeyRequestHistory])
    rows?: KeyRequestHistory[];
}    


@InputType()
export class InputKeyRequestHistory{
	@Field(_ => BigInt ,{ nullable: true })
	key_request_history_idx?: number

	@Field(_ => BigInt ,{ nullable: true })
	key_data_idx?: number

	@Field({ nullable: true })
	ip?: string

	@Field({ nullable: true })
	result?: string

	@Field({ nullable: true })
	regist_datetime?: Date

	@Field({ nullable: true })
	update_datetime?: Date

}  

//class_end