///////////////////////////////////////////////////////////////////////////////////
export default  ( sequelize , DataTypes ) => {
    
    const Message = sequelize.define('Messages',{
            message_id : { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
            chat_id:DataTypes.INTEGER,
            name:DataTypes.STRING,
            text:DataTypes.STRING,
            createdAt:{ type: DataTypes.DATE, allowNull: false,defaultValue: sequelize.literal('CURRENT_TIMESTAMP') }
    },
    { 
        tableName: 'messages',
        timestamps: false 
    })
    
    return Message
}
///////////////////////////////////////////////////////////////////////////////////