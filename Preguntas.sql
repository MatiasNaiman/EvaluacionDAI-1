USE [Preguntas]
GO
CREATE TABLE [dbo].[Preguntas](
[Id] [int] IDENTITY(1,1) NOT NULL,
[Pregunta] [varchar](255) NULL,
[Respuesta01] [varchar](255) NULL,
[Respuesta02] [varchar](255) NULL,
[Respuesta03] [varchar](255) NULL,
[Respuesta04] [varchar](255) NULL,
[RespuestaCorrecta] [int] NULL,
[FechaCreacion] [datetime] NULL,
CONSTRAINT [PK_Preguntas] PRIMARY KEY CLUSTERED (
[Id] ASC
)
)
GO