数据库
	数据库连接信息在文件webapp.xml中
	数据库客户端mysql workbench / navicat for mysql
	所有表结构说明对应服务端包com.sean.credit.entity

服务端
	环境要求: 
	操作系统: linux/ubuntu
	应用服务器: tomcat
	ide : eclipse/myeclipse
	jdk8 : 运行环境
	redis : 用户认证服务器, 验证码服务器
	mysql : 数据库

	配置文件
	webapp.xml 系统运行环境配置
	setting.json 业务配置
	log4j.properties 日志配置

	包介绍
	com.sean.credit.bean       	业务实现，　一个类对应一个模块
	com.sean.credit.dic		动态数据字典
	com.sean.credit.entity		所有数据库实体，　一个类对应数据库表
	com.sean.credit.rest.admin	管理后台接口
	com.sean.credit.rest.change	信用分变更接口
	com.sean.credit.rest.code	验证码接口
	com.sean.credit.rest.feedback	反馈接口
	com.sean.credit.rest.game	游戏接口
	com.sean.credit.rest.notice	通知公告接口
	com.sean.credit.rest.order	订单接口
	com.sean.credit.rest.reward	奖励接口
	com.sean.credit.rest.transfer	转让接口
	com.sean.credit.rest.user	用户接口

	打包
	用eclipse/myeclipse打开工程，　右键工程export 成 credit.war

	部署
	将credit.war上传到47.74.128.24/47.74.134.12 这两台服务器的/opt/tomcat/webapps目录
	上传之前删除47.74.128.24/47.74.134.12这两台服务器的/opt/tomcat/webapps目录中的credit和credit.war

客户端
	运行环境：webpack + nodejs	

	目录结构
	app 手机端
	console　管理后台
	pc　pc端
	项目目录结构都一样，以pc端为例

	
	项目目录结构
	/res/drawable 图片
	/res/libs　第三方库
	/res/sound　音频
	/res/style　样式
	/res/*.html　模板页
	/src　脚本
	/package.json nodejs包定义
	/webpack.config.js　webpack配置文件

	编译
	在项目根目录运行webpack

	打包
	把整个res打包即可

	部署
	将压缩包上传到47.74.132.124服务器的/opt/web/pc目录并解压即可
	上传之前先清空47.74.132.124服务器的/opt/web/pc目录下的所有文件

	app和console同理
	
















