from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str
    redis_url: str
    jwt_secret: str
    access_token_expire_minutes: int = 15
    refresh_token_expire_days: int = 7

    stripe_secret_key: str = ""
    cloudinary_cloud_name: str = ""
    cloudinary_api_key: str = ""
    cloudinary_api_secret: str = ""
    allowed_origins: list[str] = []

    @property
    def ACCESS_TOKEN_SECRET(self) -> str:
        return self.jwt_secret

    @property
    def REFRESH_TOKEN_SECRET(self) -> str:
        return self.jwt_secret

    @property
    def ALLOWED_ORIGINS(self) -> list[str]:
        return self.allowed_origins

    @property
    def STRIPE_SECRET_KEY(self) -> str:
        return self.stripe_secret_key

    @property
    def CLOUDINARY_CLOUD_NAME(self) -> str:
        return self.cloudinary_cloud_name

    @property
    def CLOUDINARY_API_KEY(self) -> str:
        return self.cloudinary_api_key

    @property
    def CLOUDINARY_API_SECRET(self) -> str:
        return self.cloudinary_api_secret


settings = Settings()