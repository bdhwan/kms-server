//easy_graphql_comment_start
/*
	key_data_idx
	key_name
	access_key
	secret_key
	ip_limit
	data
	regist_datetime
	update_datetime
	
*/
//easy_graphql_comment_end
import { Table, AutoIncrement, PrimaryKey, Column, DataType, Sequelize , Model } from "sequelize-typescript";
import { ObjectType, Field, Int, InputType , Float } from "type-graphql";
const BigInt = require('graphql-bigint')

@Table({
    timestamps:false,
    tableName: 'key_data'
})
    
 
@ObjectType()
export class KeyData extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({type: DataType.BIGINT({ length : 20 })  })
	@Field(_ => BigInt ,{ nullable: true })
	key_data_idx?: number

	@Column({type: DataType.STRING({ length : 100 })  })
	@Field({ nullable: true })
	key_name?: string

	@Column({type: DataType.STRING({ length : 100 })  })
	@Field({ nullable: true })
	access_key?: string

	@Column({type: DataType.STRING({ length : 100 })  })
	@Field({ nullable: true })
	secret_key?: string

	@Column({type: DataType.TEXT  })
	@Field({ nullable: true })
	ip_limit?: string

	@Column({type: DataType.TEXT  })
	@Field({ nullable: true })
	data?: string

	@Column({type: DataType.DATE , defaultValue : Sequelize.literal('CURRENT_TIMESTAMP') })
	@Field({ nullable: true })
	regist_datetime?: Date

	@Column({type: DataType.DATE , defaultValue : Sequelize.literal('CURRENT_TIMESTAMP') })
	@Field({ nullable: true })
	update_datetime?: Date

}

@ObjectType()
export class SelectKeyDataListReturn {
    @Field(type => Int)
    count?: number;

    @Field(type => [KeyData])
    rows?: KeyData[];
}    


@InputType()
export class InputKeyData{
	@Field(_ => BigInt ,{ nullable: true })
	key_data_idx?: number

	@Field({ nullable: true })
	key_name?: string

	@Field({ nullable: true })
	access_key?: string

	@Field({ nullable: true })
	secret_key?: string

	@Field({ nullable: true })
	ip_limit?: string

	@Field({ nullable: true })
	data?: string

	@Field({ nullable: true })
	regist_datetime?: Date

	@Field({ nullable: true })
	update_datetime?: Date

}  

//class_end