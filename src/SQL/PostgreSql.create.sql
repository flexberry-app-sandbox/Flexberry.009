




CREATE TABLE ТЧОтчетОТестПК (
 primaryKey UUID NOT NULL,
 Выводы_и_рекомендации VARCHAR(255) NULL,
 Операционная_система VARCHAR(255) NULL,
 результаты_тестирования VARCHAR(255) NULL,
 Тестируемые_приложения_и_игры VARCHAR(255) NULL,
 ОтчетОТестПК UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 Номер_телефона INT NULL,
 ФИО VARCHAR(255) NULL,
 ЗакМенеджера UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗакМенеджера (
 primaryKey UUID NOT NULL,
 Дата VARCHAR(255) NULL,
 Номер_заявки INT NULL,
 Операционная_система VARCHAR(255) NULL,
 Описание_проблемы VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчетОТестПК (
 primaryKey UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧЗакМенеджера (
 primaryKey UUID NOT NULL,
 Действия_для_устранения_проблемы VARCHAR(255) NULL,
 ЗакМенеджера UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 Товар VARCHAR(255) NULL,
 ЗакМенеджера UUID NOT NULL,
 Инженер UUID NOT NULL,
 ОтчетОТестПК UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 Номер_Телефона VARCHAR(255) NULL,
 ФИО VARCHAR(255) NULL,
 ЗакМенеджера UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Инженер (
 primaryKey UUID NOT NULL,
 Гарантии_производителя VARCHAR(255) NULL,
 Дата_производства VARCHAR(255) NULL,
 Инструкция_по_использованию VARCHAR(255) NULL,
 Описание_продукта VARCHAR(255) NULL,
 Производитель VARCHAR(255) NULL,
 Серия_и_номер_партии INT NULL,
 Сертификация_и_стандарты VARCHAR(255) NULL,
 Экологичность_продукта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТЧОтчетОТестПК ADD CONSTRAINT FKe98d9f42cf7c9791e189041e1db32f9cf5eb9e45 FOREIGN KEY (ОтчетОТестПК) REFERENCES ОтчетОТестПК; 
CREATE INDEX Indexe98d9f42cf7c9791e189041e1db32f9cf5eb9e45 on ТЧОтчетОТестПК (ОтчетОТестПК); 

 ALTER TABLE Клиенты ADD CONSTRAINT FKfbad11e42f928c81b322ab641bd8b794fcee3754 FOREIGN KEY (ЗакМенеджера) REFERENCES ЗакМенеджера; 
CREATE INDEX Indexfbad11e42f928c81b322ab641bd8b794fcee3754 on Клиенты (ЗакМенеджера); 

 ALTER TABLE ТЧЗакМенеджера ADD CONSTRAINT FK71fa19148cbe8571294dc2e58fa0bdaa44f1e620 FOREIGN KEY (ЗакМенеджера) REFERENCES ЗакМенеджера; 
CREATE INDEX Index71fa19148cbe8571294dc2e58fa0bdaa44f1e620 on ТЧЗакМенеджера (ЗакМенеджера); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FK9d7fb80876a2ff7fbedea3dc60104fe856866b73 FOREIGN KEY (ЗакМенеджера) REFERENCES ЗакМенеджера; 
CREATE INDEX Index9d7fb80876a2ff7fbedea3dc60104fe856866b73 on Номенклатура (ЗакМенеджера); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FK83bc1a5b4dcf836e5e16701c37c6989d1ae93546 FOREIGN KEY (Инженер) REFERENCES Инженер; 
CREATE INDEX Index83bc1a5b4dcf836e5e16701c37c6989d1ae93546 on Номенклатура (Инженер); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FKc3ead2b0bdf9fe3846dd589dd109bfbefe28f214 FOREIGN KEY (ОтчетОТестПК) REFERENCES ОтчетОТестПК; 
CREATE INDEX Indexc3ead2b0bdf9fe3846dd589dd109bfbefe28f214 on Номенклатура (ОтчетОТестПК); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKe4f69dc2b4f4102f029812325f9d37840e4f1f54 FOREIGN KEY (ЗакМенеджера) REFERENCES ЗакМенеджера; 
CREATE INDEX Indexe4f69dc2b4f4102f029812325f9d37840e4f1f54 on Сотрудники (ЗакМенеджера); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

